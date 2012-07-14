echo "Removing current mnemonic directory..."
ssh david@davidgerth.com rm -rf /var/www/portfolio

echo "Cloning git repository into davidgerth.com/var/www/portfolio..."
ssh david@davidgerth.com git clone https://github.com/davidgerthcom/portfolio.git /var/www/portfolio