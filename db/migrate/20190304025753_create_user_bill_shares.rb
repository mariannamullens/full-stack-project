class CreateUserBillShares < ActiveRecord::Migration[5.2]
  def change
    create_table :user_bill_shares do |t|
      t.integer :user_id, null: false
      t.integer :bill_id, null: false
      t.decimal :amount, null: false
      t.timestamps
    end
    add_index :user_bill_shares, [:user_id, :bill_id], unique: true
  end
end
