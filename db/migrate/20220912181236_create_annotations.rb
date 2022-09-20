class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.text :body, null: false
      t.integer :user_id, null: false, unique: true
      t.integer :text_id, null: false
      t.integer :start_idx, null: false
      t.integer :end_idx, null: false

      t.timestamps
    end
    add_index :annotations, :body
    add_index :annotations, :user_id
    add_index :annotations, :text_id
    add_index :annotations, :start_idx
    add_index :annotations, :end_idx
  end
end
