class Array

  def my_each(&prc)
    self.length.times do |idx|
      prc.call(self[idx])
    end
    self
  end

  def my_select(&prc)
    selection = []
    self.my_each do |el|
      selection << el if prc.call(el)
    end
    selection
  end

  def my_reject(&prc)
    rejection = []
    self.my_each do |el|
      rejection << el unless prc.call(el)
    end
    rejection
  end

  def my_any?(&prc)
    self.my_each do |el|
      return true if prc.call(el)
    end
    false
  end

  def my_all?(&prc)
    self.my_each do |el|
      return false unless prc.call(el)
    end
    true
  end

  def my_flatten
    flattened = []
    self.my_each do |el|
      if el.is_a?(Array)
        flattened.concat(el.my_flatten)
      else
        flattened << el
      end
    end
    flattened
  end

  def my_zip (*arg)

    # max_length = arg.max_by(&:length).length
    # max_length = self.length if self.length > max_length

    zipped = Array.new(self.length){Array.new}

    self.each_with_index do |el,idx|
      zipped[idx] << el
      arg.each do |i|
        zipped[idx] << i[idx]
      end
    end

    zipped
  end

  def my_rotate(offset = 1)
    offset = offset % self.length
    self.drop(offset) + self.take(offset)
  end

  def my_join(separator = "")
    joined = ""
    self.each_with_index do |el, idx|
      if idx != (self.length-1)
        joined << el + separator
      else
        joined << el
      end
    end
    joined
  end

  def my_reverse
    reversed = []
    len = self.length - 1
    (len.downto(0)).each do |idx|
      reversed << self[idx]
    end
    reversed 
  end


end
