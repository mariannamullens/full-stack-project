Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]
    resources :friends, only: [:create, :destroy]
  end
  
  root "static_pages#root"
end
