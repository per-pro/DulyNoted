class CreateChanges < ActiveRecord::Migration[5.2]
  def change
    create_table :changes do |t|
      remove_column :comments, :author
      remove_column :texts, :author
      add_column :comments, :author_id, :integer
      add_column :texts, :author_id, :integer

    end
  end
end
