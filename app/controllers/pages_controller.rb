class PagesController < ApplicationController
  layout "application"
  def home
    @projects = Project.all
  end
  def about
  end
end
