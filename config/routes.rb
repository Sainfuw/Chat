Rails.application.routes.draw do
  get 'chatroom_users/create'
  get 'chatroom_users/destroy'
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }  
  
  resources :chatrooms do
    resource :chatroom_users
    resources :messages
  end

  root to: 'chatrooms#index'
end
