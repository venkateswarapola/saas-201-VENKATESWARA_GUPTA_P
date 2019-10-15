class DepartmentsController < ApplicationController
  def index
    #Department.update_all('name = upper(name)')
    @departments = Department.all
  end

  def new
    @department = Department.new
  end

  def create
    @department = Department.new(department_params)

    if @department.save
      Department.update_all("name = upper(name)")
      redirect_to action: "index"
    else
      render "new"
    end
  end

  private

  def department_params
    params[:department].permit(:name)
  end
end
