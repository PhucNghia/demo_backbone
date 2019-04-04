class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.string :name
      t.boolean :winner

      t.timestamps
    end
  end
end
