json.set! "bills" do
  json.set! @bill.id do
    json.partial! '/api/bills/bill', bill: @bill
  end
end