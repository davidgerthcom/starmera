echo "Removing current mnemonic directory..."
ssh david@davidgerth.com rm -rf /var/www/starmera

echo "Cloning git repository into davidgerth.com/var/www/portfolio..."
ssh david@davidgerth.com git clone https://github.com/davidgerthcom/starmera.git /var/www/starmera