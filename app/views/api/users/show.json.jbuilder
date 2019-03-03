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
      # json.extract! friendship, :id
      json.userId friendship.user_id
      json.friendId friendship.friend_id
    end
  end
end

json.set! "session" do
  json.currentUserId @user.id
end