class Api::FriendsController < ApplicationController
    # TOFIX: TESTING!
  skip_before_action :verify_authenticity_token


  def create
    @user = current_user
    @friend = User.find_by(email: params[:friend][:email])
    @friendship = Friend.new(user_id: @user.id, friend_id: @friend.id)

    if @friendship.save
      render 'api/friends/show'
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def friend_params
    params.require(:friend).permit(:email)
  end
end
