class Player
  attr_accessor :name
  def initialize(name)
    @name = name
  end

  def guess(fragment,length)
    print "#{@name} : Enter your letter > "
    letter = gets.chomp
  end

  def alert_invalid_guess

  end
end
