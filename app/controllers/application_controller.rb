class ApplicationController < ActionController::Base
  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    session[:session_token] = nil
    current_user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
end
