require_relative 'tree.rb'

class KnightPathFinder

  attr_accessor :position ,:visited_positions , :root_node


  def initialize(start_pos)

    @position = start_pos
    @visited_positions = [start_pos]
    build_move_tree

  end

  def self.valid_moves(start_pos)

  knight_moves = [[1,2],[-1,2],[-2,1], [-2,-1],[-1,-2],[1,-2],[2,-1],[2,1]].freeze

    possible_moves = []

    knight_moves.each do |move|
      new_x , new_y = start_pos[0] + move[0] , start_pos[1] + move[1]
      new_pos = [new_x, new_y] if (new_x > 0 && new_y > 0 && new_x < 8 && new_y < 8 )
      possible_moves << new_pos if new_pos != nil
    end

    possible_moves

  end

  def new_move_positions(start_pos)

    moves = KnightPathFinder.valid_moves(start_pos)
    moves = moves.select{|mov| !@visited_positions.include?mov }
    @visited_positions += moves
    moves

  end

  def build_move_tree

    @root_node = PolyTreeNode.new(@position)
    nodes = [@root_node]

    until nodes.empty?
      current_node = nodes.shift
      current_pos = current_node.value

      new_move_positions(current_pos).compact.each do |move|
        next_node = PolyTreeNode.new(move)
        current_node.add_child(next_node)
        nodes << next_node
      end

    end

    nodes

  end


  def find_path(end_pos)

    end_node = @root_node.dfs(end_pos)
    trace_path_back(end_node).reverse.map(&:value)

  end


  def trace_path_back(end_node)

   nodes = []

   current_node = end_node
   until current_node.nil?
     nodes << current_node
     current_node = current_node.parent
   end

   nodes

  end


end

if __FILE__ == $PROGRAM_NAME
  knight = KnightPathFinder.new([0,0])
  p knight.find_path([7,7])
end
