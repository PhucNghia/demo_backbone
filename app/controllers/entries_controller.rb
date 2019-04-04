class EntriesController < ApplicationController

  def index
    @entries = Entry.all.pluck(:id, :name, :winner)
    render json: @entries, status: :ok
  end
end
