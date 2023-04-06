# app/controllers/todos_controller.rb

class TodosController < ApplicationController
  def new
    @todo = Todo.new
  end

  def index
    @todos = Todo.all
  end

  def show
  end

  def create
    @todo = Todo.new(todo_params)

    respond_to do |format|
      if @todo.save
        format.html { redirect_to todos_path, notice: "Todo was successfully created." }
        format.json { render :index, status: :created }
      else
        format.html { render :index, status: :unprocessable_entity }
        format.json { render json: @todo.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    render json: @todo
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    respond_to do |format|
      format.html { redirect_to todos_path, notice: "Todo was successfully destroyed." }
      format.json { render :index }
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :completed)
  end
end
