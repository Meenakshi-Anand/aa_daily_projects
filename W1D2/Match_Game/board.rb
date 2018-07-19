require_relative 'card'
class Board 
  attr_accessor :grid 
  
  def initialize (grid = Array.new(2){Array.new(2)})
    @grid = grid
    
    populate
  end 
  
  def populate 
    card = card_pairs.shuffle
    @grid.each_with_index do |row, idx|
      row.each_with_index do |square, idx2|
        @grid[idx][idx2] = Card.new(card.pop)
      end
    end
  end 
  
  def won?
    @grid.each do |row|
      return false unless row.all? {|card| card.face_up == true}
    end  
    true
  end 
  
  def reveal(pos)
    card = self[pos]
    card.reveal
    
    render
    sleep(2)
    reset_reveal(card) 
  end 
  
  def reset_reveal(card1, card2)
    card1.hide
    card2.hide
  end
  
  def [](position)
    row,col = position
    @grid[row][col]
  end 
  
  def get_position
    gets.chomp.split(',').reduce([]){|pos, input| pos << input.strip.to_i}
  end
  
  def ask_for_position 
    puts   "Enter the position of the first card : (example later)"
    position_1 = get_position
    
    puts   "Enter the position of the second card : (example later)"
    position_2 = get_position
  
    reveal(position_1,position_2)
    
  end 
  
  def card_pairs
    
    max_length = (@grid.length * @grid[0].length) / 2
    
    pairs = []
    max_length.times do |num|
      pairs << num 
      pairs << num
    end
     
    pairs
    
  end
  
  def render
  
    @grid.each do |row|
      display_rows = ""
      row.each_with_index do |square,idx|
        if square.face_up
          temp = square.face_value
        else
          temp = "*"
        end
        
        if idx < row.length 
          display_rows += "#{temp}   | "
        else 
          display_rows += "#{temp}   "
        end 
      end     
      puts "#{display_rows}"
      puts "-------------------------"
     end 
  end 
  
  def check_pair(value1, value2)
    value1.face_value == value2.face_value
  end
  
end 

