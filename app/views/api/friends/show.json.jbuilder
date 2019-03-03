json.friendId @friend.id
# json.friendshipId @friendship.id

json.set! "users" do
  json.set! @friend.id do
    json.partial! '/api/users/user', user: @friend
  end
end

json.set! "friends" do
  json.set! @friend.id do
    # json.extract! @friendship, :id
    json.userId @user.id
    json.friendId @friend.id
  end
end