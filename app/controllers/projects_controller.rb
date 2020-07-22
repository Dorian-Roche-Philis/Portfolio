class ProjectsController < ApplicationController
  layout "parallax"

  before_action :set_project, only: [:show]
  def show
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end
end
