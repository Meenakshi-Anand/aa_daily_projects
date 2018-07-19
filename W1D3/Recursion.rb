require 'byebug'
def range (start_num , end_num)

  return [start_num] if start_num == end_num
  range(start_num,end_num-1)+[end_num]

end

def iterative_sum_of_array (arr)

  sum_array = 0

  arr.each do |el|
    sum_array += el
  end

  sum_array

end

def recursive_sum_of_array(arr)

  return arr[0] if arr.length == 1
  arr[0] + recursive_sum_of_array(arr[1..-1])

end

def exp1(base,power)

  return 1 if power == 0
  base * exp1( base , power-1)

end



def exp(b, n)
  return 1 if n ==0
  return b if n == 1
  if n.even?
    exp(b, n / 2) ** 2
  else
    b * (exp(b, (n - 1) / 2) ** 2)
  end
end

class Array
  def deep_dup
    deep_array = []
    self.each do |el|
       unless el.is_a?(Array)
         deep_array << el
       else
         deep_array << el.deep_dup
       end
    end
    deep_array
  end
end

def fib_iterative (n)
  fibs = [0,1]
  if n <= 2
    return fibs.take(n)
  else
    while (fibs.length < n)
      fibs << fibs[-2]+fibs[-1]
    end
  end
  fibs
end

def fibonacci(n)
  if n <= 2
    [0,1].take(n)
  else
    fibs = fibonacci(n-1)
    fibs << fibs[-2]+fibs[-1]
  end
end



def bsearch(arr, num)

  mid_pos = arr.length/2
  return mid_pos if arr[mid_pos] == num
  # return nil if arr == nil
  return nil if arr == []
  return nil if arr.length == 1 && arr[0] != num
  ##

  left = arr[0...mid_pos]
  right = arr [mid_pos..-1]

#debugger
  if num > arr[mid_pos]
    return nil if bsearch(right, num) == nil
    mid_pos += bsearch(right, num)
  else
    return nil if bsearch(left, num) == nil
    mid_pos -= bsearch(left, num)
  end
end







def merge_sort(arr)
    return arr if arr.length <= 1
    mid_pos = arr.length/2
    left = arr[0...mid_pos]
    right = arr[mid_pos..-1]
    merge(merge_sort(left), merge_sort(right))
end



def merge (half1,half2)
  merged_arr = []

  until (half1.length == 0 || half2.length==0)
    if half1[0] > half2[0]
      merged_arr << half2.shift
    else
      merged_arr << half1.shift
    end
  end
   merged_arr += half1 if half2.empty?
   merged_arr += half2 if half1.empty?
   return merged_arr
end



def subsets(arr)
 return [[]] if arr.empty?

 temp = arr.pop
 r = subsets(arr)
 r2 = r.deep_dup.map {|el| el << temp}
 r += r2

end

def subsets2(arr)
 return [[]] if arr.empty?

len = arr.length-1
 temp_arr = arr.take(len)
 r = subsets(temp_arr)
 r += r.map {|el| el << arr[-1]}

end


def permutations(arr)

  return [arr] if arr.length <= 1
  len = arr.length-1
  temp = arr.take(len)
  prev_permutation = permutations(temp)
  p
    el.each_with_index do |sub_el,idx|



end
