class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :source, null: false
      t.string :author, null: false
      t.string :content, null: false

      t.timestamps
    end

    add_index :songs, :title 
    add_index :songs, :source
    add_index :songs, :author 
  end
end
