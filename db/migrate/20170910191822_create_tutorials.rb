class CreateTutorials < ActiveRecord::Migration[5.1]
  def change
    create_table :tutorials do |t|
      t.string :topic
      t.string :description
      t.integer :views

      t.timestamps
    end
  end
end
