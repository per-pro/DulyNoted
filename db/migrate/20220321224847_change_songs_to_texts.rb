class ChangeSongsToTexts < ActiveRecord::Migration[5.2]
  def change
    rename_table :songs, :texts
  end
end
