class ChangeDate < ActiveRecord::Migration[5.2]
  def change
    remove_column :authors, :birth_date
    remove_column :authors, :death_date
    add_column :authors, :birth_date, :integer
    add_column :authors, :death_date, :integer
  end
end
