class Api::BillsController < ApplicationController
    # TOFIX: TESTING!
  skip_before_action :verify_authenticity_token

  def create
    @bill = Bill.new(bill_params)
    @bill.creator_id = current_user.id

    if @bill.save
      render 'api/bills/show'
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def show
    @bill = Bill.find(params[:id])
  end

  def update
    @bill = Bill.find(params[:id])

    if @bill.update_attributes(bill_params)
      render 'api/bills/show'
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def destroy
    @bill = Bill.find(params[:id])

    if @bill.destroy
      render 'api/bills/show'
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  private

  def bill_params
    params.require(:bill).permit(:description, :note, :amount, :payer_id)
  end
end
