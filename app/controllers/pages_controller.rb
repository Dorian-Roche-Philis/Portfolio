class PagesController < ApplicationController
  layout "application"
  def home
    @projects = Project.all
  end
end
