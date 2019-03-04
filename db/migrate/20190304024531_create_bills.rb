class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :creator_id, null: false
      t.string :description, null: false
      t.text :note
      t.integer :payer_id, null: false
      t.decimal :amount, null: false
      t.timestamps
    end
    add_index :bills, :creator_id
    add_index :bills, :payer_id
  end
end
