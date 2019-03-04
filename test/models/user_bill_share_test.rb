# == Schema Information
#
# Table name: user_bill_shares
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  bill_id    :integer          not null
#  amount     :decimal(16, 2)   not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class UserBillShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
