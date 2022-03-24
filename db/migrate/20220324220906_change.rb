class Change < ActiveRecord::Migration[5.2]
  def change
    add_index :authors, :name
  end
end
