class Player
  def initialize (name)
    @name = name 
  end 
  
  def get_position
    gets.chomp.split(',').reduce([]){|pos, input| pos << input.strip.to_i}
  end
  
  def ask_for_position 
    puts   "Enter the position of the  card : (example later)"
    position_1 = get_position
    
    position_1
  end 
  
end 