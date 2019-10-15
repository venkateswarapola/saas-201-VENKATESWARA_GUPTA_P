class SectionsController < ApplicationController
  def index
    Section.update_all('name=upper(name)')
    if params[:department_id]
      @sections = Section.where(department_id: params[:department_id]).all
    else
      @sections = Section.all
    end
  end


  def new
    @section = Section.new
    @department_collection = Department.all.collect { |p| [p.name, p.id] }
  end

  def create
    @section = Section.new(section_params)
    if @section.save
      redirect_to action: "index"
    else
      render "new"
    end
  end

  #def show
   # @section=Section.find(params[:id])
    #@students=@section.students
  #end

  private

  def section_params
    params[:section].permit(:name, :department_id)
  end
  
end
