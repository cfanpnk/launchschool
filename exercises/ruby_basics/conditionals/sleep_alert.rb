status = ['awake', 'tired'].sample

condition = if status == 'awake'
              "Be productive!"
            else 
              "Go to sleep!"
            end
puts condition