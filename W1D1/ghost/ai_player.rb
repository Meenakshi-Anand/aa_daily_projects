class AiPlayer

  def initialize (name,dictionary = File.readlines("dictionary.txt").map { |word| word.chomp! })
    @name = name
    @dictionary = dictionary
  end

  def guess (fragment,length)
    move = winning_move(fragment,length) if winning_move(fragment,length)!=''
  end

  def winning_move(fragment,length)
    move = ''
    
    list = @dictionary.select { |word| word[0...fragment.length] == fragment }
    list.any? { |word| word.length == (fragment.length + 2)}

  end

  def possible_move

  end

end
