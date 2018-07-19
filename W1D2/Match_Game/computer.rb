class Computer
  
  attr_accessor :known_cards, :matched_cards, :board
  
  def initialize(name = "Computerman")
    @name = name
    @known_cards = Hash.new
    @matched_cards = []
  end
  
  def get_position
    move = []
    winning_guess
    return @matched_cards.pop if @matched_cards != []
    move = random_guess 
  end
  
  def winning_guess
    if @matched_cards == []
      @matched_cards = @known_cards.select {|key, value| key if @known_cards.values.count(value) == 2 }.keys
    end
  end
  
  def random_guess
    move = [(0...board.length).sample, (0...board.length).sample] until !(@known_cards.keys.include?(move))
  end
  
  def received_revealed_card(position)
    @known_cards[position] = board[position]
  end
  
  def receive_match(pos1, pos2)
  end
  
end