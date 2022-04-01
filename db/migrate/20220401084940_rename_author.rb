class RenameAuthor < ActiveRecord::Migration[5.2]
  def change
    remove_column :authors, :bio
    add_column :authors, :description, :text
  end
end
