class AddDepartmentAndSectionToStudent < ActiveRecord::Migration[5.2]
  def change
    add_column :students, :department_id, :integer
    add_column :students, :section_id, :integer
  end
end
