class Api::SessionsController < ApplicationController
  # TOFIX: TESTING!
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid email or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["You are not logged in"], status: 404
    end
  end
end