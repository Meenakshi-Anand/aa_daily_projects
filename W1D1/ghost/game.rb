
require_relative 'player'

class Game

  attr_accessor :players, :fragment, :dictionary, :current_player, :previous_player

  def initialize(players, dictionary = File.readlines("dictionary.txt").map { |word| word.chomp! })
    @players = players
    @fragment = ""
    @dictionary = dictionary
    @current_player = players.first
    # @previous_player = players.last
    @losses = {}
    players.each { |player| @losses[player] = 0 }
    @turn = 0
  end

  def play_round
      letter = take_turn(current_player)
      @fragment += letter
      next_player!
  end

  def play
    until game_over?
      until round_over?
        play_round
        puts "Fragment: #{@fragment}"
      end
      puts "#{@previous_player.name} lost that round"
      @losses[previous_player] += 1
      records(@previous_player)
      check_lost(@previous_player)
      @fragment = ""
    end
    puts "Game over #{@players.first.name} won !!!"
  end

  def game_over?
    if players.length == 1
      return true
    end
    false

  end

  def check_lost(player)
    remove_player(player) if @losses[player] == 5
  end

  def remove_player(player)
    if player == @players.first
      @players.delete(player)
      next_player!
    else
      @players.delete(player)
    end
    puts "#{player.name} is out!"
  end

  def records(player)
    result = "GHOST"
    puts "#{player.name} score: #{result[0..(@losses[player]-1)]}"
  end

  def round_over?
    dictionary.include?(@fragment)
  end

  def next_player!
    @turn += 1
    @turn = 0 if @turn >= players.length
    @current_player = players[@turn]
    @previous_player = players[@turn-1]
    # p "current player: #{current_player.name}"
    # p "previous_player: #{previous_player.name}"

  end

  def take_turn(player)
    letter = player.guess(@fragment,@players.length)
    until valid_play?(letter)
      letter = player.guess
    end
    return letter
  end

  def valid_play?(string)
    alphabet = ('a'..'z').to_a
    return false unless (alphabet.include? string)
    temp = @fragment + string
    @dictionary.each do |word|
      if word[0...temp.length] == temp
        return true
      end
    end
    false
  end


end

if __FILE__ == $PROGRAM_NAME
  player_1 = Player.new("a")
  player_2 = Player.new("b")
  player_3 = Player.new("c")
  game = Game.new([player_1,player_2,player_3])
  game.play
end
