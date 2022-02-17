class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :content, null: false

      t.timestamps
    end

    add_index :comments, :title
    add_index :comments, :author 
  end
end
