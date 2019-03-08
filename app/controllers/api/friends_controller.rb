class Api::FriendsController < ApplicationController

  def create
    @user = current_user
    friend_email = params[:friend][:email]
    @friend = User.find_by(email: params[:friend][:email])

    if @friend
      @user.friendships.build(friend: @friend)
    else
      @friend = @user.friends.build(name: friend_email, email: friend_email, password: "password")
    end

    if @user.save
      render 'api/friends/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def friend_params
    params.require(:friend).permit(:email)
  end
end
