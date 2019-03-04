json.bills do
  json.set! @bill.id do
    json.partial! '/api/bills/bill', bill: @bill
  end
end

json.userBillShares do
  @bill.user_bill_shares.each do |share|
    json.set! share.id do
      json.extract! share, :id, :user_id, :amount, :bill_id
    end
  end
end