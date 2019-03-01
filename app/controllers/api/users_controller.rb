class Api::UsersController < ApplicationController
  # TOFIX: TESTING!
  skip_before_action :verify_authenticity_token

  def show
    @user = User.find(params[:id])
    
    if @user
      render 'api/users/show'
    else
      render json: ["You are not logged in"], status: 401
    end
  end
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
