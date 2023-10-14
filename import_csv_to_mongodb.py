import pandas as pd
from pymongo import MongoClient

def import_csv_to_mongodb():
    print("Connecting to MongoDB...")
    # Connect to MongoDB
    client = MongoClient('localhost', 27017)
    db = client['checkout_data']
    collection = db['payment_responses']
    
    print("Reading CSV file...")
    # Load CSV data into a DataFrame
    file_path = '/Users/hamudgit/Desktop/UpdatedTestPay/data.csv'
    data = pd.read_csv(file_path)
    
    # Convert DataFrame to a list of dictionaries
    print(f"Converting {len(data)} rows to dictionary format...")
    data_dict = data.to_dict("records")
    
    print("Inserting data into MongoDB...")
    # Insert data into MongoDB collection
    collection.insert_many(data_dict)
    print("Data import complete.")

if __name__ == "__main__":
    import_csv_to_mongodb()
