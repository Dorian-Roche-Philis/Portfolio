class PagesController < ApplicationController
  def home
    @projects = Project.all
    @origin = 1
  end
end
