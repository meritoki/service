/*
Name: management.sql
Author: Joaquin Rodriguez
Date: 20150624
Copyright: 2015 MeritBuilders, Inc.
*/
CREATE DATABASE IF NOT EXISTS management;
USE management;

source ./model/relational/table/create/Account.sql
source ./model/relational/table/create/User.sql
source ./model/relational/table/create/Client.sql
source ./model/relational/table/create/Code.sql
source ./model/relational/table/create/Email.sql
source ./model/relational/table/create/File.sql
source ./model/relational/table/create/Identification.sql
source ./model/relational/table/create/Location.sql
source ./model/relational/table/create/Organization.sql
source ./model/relational/table/create/Phone.sql
source ./model/relational/table/create/Token.sql
