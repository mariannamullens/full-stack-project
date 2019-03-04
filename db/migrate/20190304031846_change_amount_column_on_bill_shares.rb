class ChangeAmountColumnOnBillShares < ActiveRecord::Migration[5.2]
  def change
    change_column :user_bill_shares, :amount, :decimal, precision: 16, scale: 2
  end
end
