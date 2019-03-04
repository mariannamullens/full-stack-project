users = [@user] + @user.friends

json.set! "users" do
  users.each do |user|
    json.set! user.id do
      json.partial! '/api/users/user', user: user
    end
  end
end

json.set! "friends" do
  @user.friendships.each do |friendship|
    json.set! friendship.friend_id do
      json.userId friendship.user_id
      json.friendId friendship.friend_id
    end
  end
end

json.set! "session" do
  json.currentUserId @user.id
end

# User bills are those they've paid into, those they've created, and those they've paid.
all_bills = @user.bills + @user.bills_paid + @user.created_bills.uniq
all_bills = all_bills.uniq

all_bills.each do |bill|
  json.bills do
    json.set! bill.id do
      json.partial! '/api/bills/bill', bill: bill
    end
  end

  json.userBillShares do
    bill.user_bill_shares.each do |share|
      json.set! share.id do
        json.extract! share, :id, :user_id, :amount, :bill_id
      end
    end
  end
end

json.set! "balanceAggregates" do
  json.owe @user.calculate_owe
  json.owed @user.calculate_owed
end