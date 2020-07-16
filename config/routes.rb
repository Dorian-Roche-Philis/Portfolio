Rails.application.routes.draw do
  get 'projects/show'
  get 'products/index'
  get 'products/show'
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
