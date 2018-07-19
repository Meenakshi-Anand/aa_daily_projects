require_relative "board"
require_relative "player"
require_relative "computer"

class Game
  
  attr_accessor :board, :previous_position, :player 
  
  def initialize(board,player)
    @board = board
    @player = player
  end
  
  def play
    puts "Let's start the game!"
     
    until board.won?
      system ("clear")
      board.render
      positions_1 = player.get_position
      positions_2  = player.get_position
      board.reveal(positions_1)
      board.reveal(positions_2)
      board.reset_reveal(board[positions_1], board[positions_2]) unless board.check_pair(board[positions_1], board[positions_2])
      
    end
    
    puts "You win!"
  end
  

end

if __FILE__ == $PROGRAM_NAME
  b  = Board.new
  pr = Computer.new("b")
  g  = Game.new(b,pr) 
  g.play
end 