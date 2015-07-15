class BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def create
    bike = Bike.create(description: params[:description], postcode: params[:postcode], status: params[:status])
    render json: bike if bike.save
  end

  def update
    bike = Bike.find(params[:id])
    bike.update_attributes(description: params[:description], postcode: params[:postcode], status: params[:status])
  end
end
